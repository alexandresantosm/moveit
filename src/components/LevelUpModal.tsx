import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button 
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>

        <button className={styles.shareTwitterButton}>
          <p>
            Compartilhar no twitter
            <img src="/icons/twitter.svg" alt="Compartilhar no twitter"/>
          </p>
        </button>
      </div>
    </div>
  );
}