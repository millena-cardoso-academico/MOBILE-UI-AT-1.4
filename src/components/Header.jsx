import styles from '../styles/Header.module.css';
import logo from '../images/Alquimiadaslinhas_logo.png';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo da Loja" className={styles.logo} />
      <h1 className={styles.title}>Alquimia das Linhas</h1>
    </div>
  );
}

export default Header;