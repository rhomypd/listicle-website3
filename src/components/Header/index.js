
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

function Header({actions}) {
  return(

    <div className={styles.header}>
      {/* logo  */}
      <div className={styles.logocontainer}>
        <Image width={40} height={40} src="/logo.png" alt={'logo'}/>
        <h2>Listicle</h2>
      </div>
      

      {/* actions  */}
      <div className={styles.actionContainer}>
        {actions.map(action => (
          <h3 key={action.title} className={styles.action}>{action.title}</h3>    
        ))}
      </div>

      {/* cta  */}
      <div className={styles.cta}>
        <h3>Sign In</h3>
        <span><h3>Create an account</h3></span>
      </div>
 
    

    </div>

    
  )
}

export default Header;