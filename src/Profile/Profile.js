import styles from './Profile.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt="Аватар пользователя"
        className={styles.avatar}
      />
      <p className={styles.name}>Petra Marica</p>
      <p className={styles.tag}>@pmarica</p>
      <p className={styles.location}>Salvador, Brasil</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>1000</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>2000</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>3000</span>
      </li>
    </ul>
  </div>
);

export default Profile;
