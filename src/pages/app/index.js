import './index.scss';
import banner from '~/banner_002.jpg';
function created(){
    console.log('app。。。');
    let img = new Image();
    img.src = banner;
    document.body.appendChild(img);
}

created();