import "./landing.css";

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <h1>Your Note</h1>
        <button className="btn btn-secondary text-s">Login</button>
      </header>
      <div className="page-content">
        <h1 className="text-large">Tame your work, organize your life.</h1>
        <p>
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </p>
        <div className="cta-actions">
          <button className="btn btn-primary text-s">Signup for free</button>
          <p>Already have account ?</p>
          <button class="btn btn-secondary-text text-s">Login</button>
        </div>
      </div>
    </>
  );
};

export { LandingPage };
