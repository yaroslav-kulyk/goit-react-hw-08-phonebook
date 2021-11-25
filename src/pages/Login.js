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

export default function LoginPage() {
  return (
    <div>
      <h1>Страница логина</h1>

      <form style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
