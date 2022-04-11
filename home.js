function Home(){
    // const ctx = React.useContext(UserContext);
    return (
        <Card 
            bgcolor  = "primary"
            txtcolor = "white"
            header   = "BadBank Landing Page"
            title    = "Welcome to the bank"
            test     = "You can use this bank"
            body     = {(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}