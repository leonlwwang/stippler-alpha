import './global.css'

const fileBtn = document.getElementById('file-btn')
const imgForm = document.getElementById('image-form')

fileBtn.onchange = () => {
  imgForm.remove()

  const image = new Image()
  const file = fileBtn.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    image.src = reader.result
  }

  const handle = document.getElementById('handle')

  const loader = document.createElement('div')
  loader.className = 'loader'
  const wrapper = document.createElement('div')
  wrapper.className = 'wrapper'
  wrapper.appendChild(loader)
  document.body.insertBefore(wrapper, handle)

  const stippler = document.createElement('canvas')
  stippler.id = 'stippler'
  stippler.style.display = 'none'
  document.body.insertBefore(stippler, handle)
  const canvas = document.getElementById('stippler')
  const context = canvas.getContext('2d', { willReadFrequently: true })

  image.onload = () => {
    const { width, height } = resize(context, image, 500)
    const blankImageData = context.getImageData(0, 0, width, height)
    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)
    const activeImageData = context.getImageData(0, 0, width, height)

    const blankImageWorker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' })
    const activeImageWorker = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module',
    })

    let points = null
    let distances = null
    let cache = null

    const start = new Date()
    blankImageWorker.postMessage({ imageData: blankImageData, density: 10, sharpness: 100 })
    activeImageWorker.postMessage({ imageData: activeImageData, density: 10, sharpness: 100 })

    blankImageWorker.onmessage = (event) => {
      points = event.data
      checkCompletion()
    }

    activeImageWorker.onmessage = (event) => {
      distances = event.data
      checkCompletion()
    }

    const checkCompletion = () => {
      if (points && distances) {
        for (let i = 0, n = distances.length; i < n; i += 2) {
          distances[i] = distances[i] - points[i]
          distances[i + 1] = distances[i + 1] - points[i + 1]
        }
        const end = new Date()
        wrapper.remove()

        const report = document.createElement('p')
        report.textContent =
          distances.length + points.length + ' points generated in ' + (end - start) / 1000 + ' sec'
        document.body.insertBefore(report, handle)

        stippler.style.display = 'block'

        console.log('animating...')
        cache = points.slice()
        drawStippling(points)
        animateStippling(points, performance.now(), 0)
      }
    }

    const drawStippling = (points) => {
      context.clearRect(0, 0, width, height)
      context.fillStyle = 'black'
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x = points[i],
          y = points[i + 1]
        context.fillRect(x, y, 1.1, 1.1)
      }
    }

    const duration = 1500
    const animateStippling = (points, startTime, progress) => {
      const currentTime = performance.now()
      const timeBetweenFrames = currentTime - startTime
      const rate = timeBetweenFrames / duration
      progress += rate

      for (let i = 0, n = points.length; i < n; i += 2) {
        points[i] = points[i] + distances[i] * rate
        points[i + 1] = points[i + 1] + distances[i + 1] * rate
      }
      drawStippling(points)

      if (progress < 1) {
        requestAnimationFrame(() => animateStippling(points, currentTime, progress))
      } else {
        console.log('animation completed')
        replay()
      }
    }

    const replay = () => {
      document.addEventListener('click', (event) => {
        if (event.target.id === 'stippler') {
          // replay functionality here
        }
      })
    }
  }
}

const resize = (context, image, width) => {
  const height = Math.round((width * image.height) / image.width)
  context.canvas.width = width
  context.canvas.height = height
  return { width: width, height: height }
}
