import logoImage from '../../assets/image 1RNM.png';

interface LogoProps {

}
export default function Logo(props : LogoProps){
    return(
        <img src={logoImage} alt="Logo of Rick n Morty" />
    )
}