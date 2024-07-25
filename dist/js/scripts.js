const { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Grid, Card, CardContent, CardMedia, CardActions } = MaterialUI;

function App() {
    React.useEffect(() => {
        const circle = document.createElement('div');
        circle.className = 'light-circle';
        document.body.appendChild(circle);

        const moveCircle = (e) => {
            requestAnimationFrame(() => {
                circle.style.top = `${e.clientY}px`;
                circle.style.left = `${e.clientX}px`;
            });
        };

        window.addEventListener('mousemove', moveCircle);

        return () => {
            window.removeEventListener('mousemove', moveCircle);
            document.body.removeChild(circle);
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" style={{ backgroundColor: 'rgba(63, 5, 5, 0.877)', width: '100%' }}>
                <Toolbar>
                    <Button color="inherit" href="#masthead">Home</Button>
                    <Button color="inherit" href="#aboutme">About Me</Button>
                    <Button color="inherit" href="#projects">Projects</Button>
                </Toolbar>
            </AppBar>

            <Container id="masthead" className="masthead">
                <div className="content-container">
                    <div className="text-container">
                        <Typography variant="h2" style={{ color: '#fff' }}>SRIMATHI VADIVEL</Typography>
                        <Typography variant="h4" style={{ color: '#fff' }}>Aspiring Software Engineer</Typography>
                        <div className="btn-social">
                            <Button href="https://github.com/srimathivadivel" target="_blank" style={{ color: '#fff', backgroundColor: '#d90000' }}>Github</Button>
                            <Button href="https://drive.google.com/file/d/1B32MbKycLg0RaQMH7iXktDzMgXTntSn2/view?usp=sharing" target="_blank" style={{ color: '#fff', backgroundColor: '#d90000' }}>Resume</Button>
                            <Button href="https://www.linkedin.com/in/srimathivadivel/" target="_blank" style={{ color: '#fff', backgroundColor: '#d90000' }}>LinkedIn</Button>
                        </div>
                    </div>
                    <img id="rounded-image" src="src/assets/img/IMG_1686_VSCO.jpg" alt="image description" />
                </div>
            </Container>

            <Container id="aboutme" className="aboutme">
                <Typography variant="h4" style={{ marginBottom: '20px' }}>ABOUT ME</Typography>
                <Typography variant="body1">
                    Hello! My name is Srimathi Vadivel, and I'm an aspiring software engineer based in Jersey City, NJ.
                    I am a student at Rutgers University studying Computer Science and Data Science.
                    I've worked with various programming languages and frameworks during my academic journey so far.
                </Typography>
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                    I'm interested in DevOps and front-end development, focusing on crafting beautiful, user-friendly interfaces.
                    I'm excited to keep honing my skills in these areas and grow my passion for this field.
                </Typography>

                <Grid container spacing={2} className="btn-languages">
                    {['Java', 'Python', 'R', 'HTML5', 'CSS', 'JavaScript'].map((lang) => (
                        <Grid item key={lang}>
                            <Button variant="outlined" style={{ pointerEvents: 'none', backgroundColor: '#ddb2b2', color: 'rgba(63, 5, 5, 0.877)' }}>
                                {lang}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={2} className="btn-frameworks">
                    {['Node.js', 'React', 'Django', 'Flask', 'Bootstrap', 'Material UI'].map((framework) => (
                        <Grid item key={framework}>
                            <Button variant="outlined" style={{ pointerEvents: 'none', backgroundColor: '#ddb2b2', color: 'rgba(63, 5, 5, 0.877)' }}>
                                {framework}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container id="projects" className="projects projects-margin">
              <Typography variant="h4" style={{ marginBottom: '20px' }}>PROJECTS</Typography>
              <Grid container spacing={4}>
                  {[
                      {
                          title: 'Personal Music Character',
                          link: 'https://github.com/srimathivadivel/YourMusicCharacter',
                          description: 'Developed an application using the Spotify API and OAuth 2.0 to securely fetch and analyze users top 5 songs, designed an innovative genre classification system using JavaScript and JSON to transform user music data into personality profiles, and implemented a SQL database to efficiently store and manage user data, music preferences, and generated profiles, highlighting skills in structured data storage and management.',
                          image: 'src/assets/img/redimg.jpg'
                      },
                      {
                          title: 'AirBnb Clone',
                          link: 'https://github.com/srimathivadivel/AirBnbClone.git',
                          description: 'Developed an iOS application using Swift that replicates core features of the Airbnb app. Implemented an intuitive user interface with SwiftUI, featuring available listings, a custom search bar for filtering, and listing images, descriptions, amenities, and pricing.',
                          image: 'src/assets/img/redimg.jpg'
                      },
                      {
                          title: 'RUSleepy',
                          link: 'https://www.youtube.com/watch?v=w7MZEzt5yzI',
                          description: 'Implemented Computer Vision techniques in Python, Arduino, and a serial device library to establish communication with C++ code. Collaborated in a team of three to develop a device aimed at aiding students in staying awake during extended study sessions and presented through a YouTube video.',
                          image: 'src/assets/img/redimg.jpg'
                      },
                      {
                          title: 'Hummer',
                          link: 'https://www.figma.com/proto/p7vG1uezZwYnQsNXKjJKWc/2blue-lofi-wireframe?node-id=260-4518&scaling=scale-down&page-id=138%3A3038&starting-point-node-id=265%3A7293&show-proto-sidebar=1',
                          description: 'An intuitive and visually engaging platform by creating wireframes, mockups, and conducted user testing to refine the design. A UI/UX case study that allows users to rate, review, and discover their favorite songs and artists.',
                          image: 'src/assets/img/redimg.jpg'
                      }
                  ].map((project) => (
                      <Grid item xs={12} sm={6} md={4} key={project.title}>
                          <Card>
                              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" style={{ color: 'rgba(189, 4, 4, 0.877)', textAlign: 'center' }}>
                                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{project.title}</a>
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" style={{ textAlign: 'justify' }}>
                                      {project.description}
                                  </Typography>
                              </CardContent>
                              <CardActions style={{ justifyContent: 'center' }}>
                                  <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                                      Learn More
                                  </Button>
                              </CardActions>
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </Container>


        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
