import gsap from 'gsap'

function getPathBetweenPoints(a, b) {
  if (a.toString() < b.toString()) {
    return {
      selector: `#path-${a}-${b}`,
      start: 0,
      end: 1,
    }
  } else {
    return {
      selector: `#path-${b}-${a}`,
      start: 1,
      end: 0,
    }
  }
}

export default function getTimelineFromPoints(points, elementSelector) {
  const tl = gsap.timeline()
  tl.pause()
  const paths = []
  for (let i = 0; i < points.length - 1; i++) {
    paths.push(getPathBetweenPoints(points[i], points[i + 1]))
  }
  paths.forEach((pathObj) => {
    const { selector, start, end } = pathObj
    const path = document.querySelector(selector)
    const duration = path.getTotalLength() / 150

    tl.to(elementSelector, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.7],
        autoRotate: false,
        start,
        end,
      },
      ease: 'linear',
      duration,
    })
  })
  return tl
}
