import shutter      from './images/shutterpic.webp'
import sugarland       from './images/sugarlandProject.webp'
import carco       from './images/carco_prj.webp'
import panorama        from './images/panorama.webp'



export const projectDB = [
    {id:1, image:`${carco}`, title:'Carco.Ge', description:'ავტო იმპორტის ვებ-გვერდი,ტრანსპორტირებისა და განბაჟების კალკულატორით.', button:'ნახვა',
                                                descriptionEng:'Auto import Web page, with transportation and Customs Clearnece calculator.', buttonEng:'Visit',  link:'https://carco.ge/',
                                                work1:'HTML', work2:'CSS', work3:'JS'},
                                                
    {id:2, image:`${panorama}`, title:'Twins Development', description:'Twins Development-ი სამშენებლო კომპანიის ვებ გვერდი.', button:'ნახვა',
                                                descriptionEng:'Landing page fro Twins Development.', buttonEng:'Visit', link:'https://twins.com.ge/',
                                                work1:'React JS', work2:'CSS', work3:'swiper.js'},
    
    {id:3, image:`${shutter}`, title:'shutter.pics', description:'პორტფოლიო ფოტოგრაფისთვის', button:'ნახვა',
                                                descriptionEng:'Super light portfolio for photographer with image viewer', buttonEng:'Visit',  link:'https://shutter.pics/',
                                                work1:'React JS', work2:'CSS', work3:'Tailwind', work4:'Axios'},

    {id:4, image:`${sugarland}`, title:'Sugarlandspamassage.com', description:'Sugarland Spa Massage - გამაჯანსაღებელი და სამკურნალო მასაჟები.', button:'ნახვა',
                                                descriptionEng:'Sugarland spa Mobile massage therapy Will bring luxury quality services.', buttonEng:'Visit', link:'https://sugarlandspamassage.com/',
                                                work1:'React JS', work2:'CSS'},
]