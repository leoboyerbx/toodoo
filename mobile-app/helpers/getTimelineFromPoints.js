import gsap from 'gsap'

function getPathBetweenPoints(a, b) {
  if (a < b) {
    return {
      path: `#path-${a}-${b}`,
      start: 0,
      end: 1,
    }
  } else {
    return {
      path: `#path-${b}-${a}`,
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
    const { path, start, end } = pathObj
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
      duration: 0.8,
    })
  })
  return tl
}
