const About = () => {
  return ( 
    <div>
      <h1>About</h1>
      <p>Nextjs automatically generates routes for us, all we need to do is to create page components and place under page folder; for example, if we want an about page/route, we simply create an about component under page folder, then we can direct to about page component in url address bar like 'http://localhost:8080/about' to render about page component. Unlike react, we have to import react-router-dom library and destructure Router, Route, Switch module and use them in App.jsx, Nextjs makes routing a no-brainer and makes life way so freaking easy.</p>
      <p>Nextjs automatically generates routes for us, all we need to do is to create page components and place under page folder; for example, if we want an about page/route, we simply create an about component under page folder, then we can direct to about page component in url address bar like 'http://localhost:8080/about' to render about page component. Unlike react, we have to import react-router-dom library and destructure Router, Route, Switch module and use them in App.jsx, Nextjs makes routing a no-brainer and makes life way so freaking easy.</p>
    </div>
    
  );
}

export default About;