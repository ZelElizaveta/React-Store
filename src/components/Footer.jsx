const Footer = () => {
    return (
      <footer className="page-footer deep-purple accent-1">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://zelelizaveta.github.io/React-Store/" target="_blank" rel='noreferrer'>Repo</a>
            </div>
          </div>
      </footer>
    )
}

export default Footer