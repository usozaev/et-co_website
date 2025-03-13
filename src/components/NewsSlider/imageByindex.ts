import ufa1 from '../../images/ufa_mk_1.jpg'
import ufa2 from '../../images/ufa_mk_2.jpg'
import tumen2 from '../../images/tumen_2.jpg'
import tumen3 from '../../images/tumen_3.jpg'

export const images: string[] = [ufa1, ufa2, tumen2, tumen3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex