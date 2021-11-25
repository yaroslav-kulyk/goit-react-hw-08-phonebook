const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
