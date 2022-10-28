# Javascript-Exercises
A list of some exercises I've done with Javascript 🤩.

# Now My Code Exercises Worked 😎.

<ul>
    <li> 
        A Simple Confirm and Alert Approval 
        Message That Ask A User If He/She Is Ready To Leave The Web
        Application 😮. And Adding a Functionality For Incase The User Doesn't
        Input His/Her Name 🤩.
        Made With ❤ By Me David Mesoma Chigozie. Please Star It 👍.
        
        <script>
            let username = prompt(`Enter your name: `);
            let genName = 'User';
            let msg = function() {
                return confirm(`Hey ${username || genName}, Are you leaving now 🙁?`);
            }

            let newMsg = msg();

            if (newMsg == true) {
                alert(`Bye now ${username || genName} 😥`)
            } else {
                alert(`Let's continue the Journey 😁`)
            }
        </script>
    </li>
</ul>

<ul>
    <li> 
        A Simple Constructor Function For An 
        Imaginary PC. It Has An Imaginary Device Name, Processor, Installed
        Ram, Device Id, Product Id and System Type. It Also Has Some Methods
        That Can Shutdown Your PC, Restart Your PC, Sleep Your PC And Also
        Logs Your PC Specification and Log Other PC Specification's 😮.
        Made With ❤ By Me David Mesoma Chigozie. Please Star It 👍.
    </li>
</ul>
