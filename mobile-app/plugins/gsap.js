import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollToPlugin)
window.gsap = gsap
