
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

function Header({actions}) {
  return(

    // logo 
    <div>
      <div className={styles.logocontainer}>
        <Image width={40} height={40} src="/logo.png" alt={'logo'}/>
        <h2>Listicle</h2>
      </div>

 
    

    </div>

    
  )
}

export default Header;