import styles from '../styles/GlobalMenu.module.css';

function GlobalMenu() {
  return (
    <nav className={styles.globalMenu}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/novidades">Novidades</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/carrinho">Carrinho</a></li>
      </ul>
    </nav>
  );
}

export default GlobalMenu;