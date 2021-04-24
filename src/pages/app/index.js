import './index.scss';
import banner from '~/banner_002.jpg';
function created(){
    const img = new Image();
    img.src = banner;
    document.body.appendChild(img);
    console.log('app。。。');
}

created();