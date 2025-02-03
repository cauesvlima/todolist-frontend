import React from 'react';
import styles from './styles.module.scss'; // Importando o arquivo de estilos

const Checkbox = () => {
  return (
    <div className={styles.checkboxWrapper15}>
      <input className={styles.inpCbx} id="cbx-15" type="checkbox" style={{ display: "none" }} />
      <label className={styles.cbx} htmlFor="cbx-15">
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span>Tarefa</span>
      </label>
    </div>
  );
};

export default Checkbox;
