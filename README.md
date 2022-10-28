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
        
        <script>
            const PC = function(device_owner, device_name, processor, installed_ram, device_id, product_id, system_type) {
                this.device_owner = device_owner;
                this.device_name = device_name;
                this.processor = processor;
                this.installed_ram = installed_ram;
                this.device_id = device_id;
                this.product_id = product_id;
                this.system_type = system_type;
                this.shutdownPC = function() {
                    console.log('Shutdown Your PC');
                };
                this.restartPC = function() {
                    console.log('Restart Your PC');
                };
                this.sleepPC = function() {
                    console.log('Sleep Your Pc');
                };
                this.logPCSpec = function() {
                    console.log(`${this.device_owner} is the owner of this PC with device name of ${this.device_name}, has a processor of ${this.processor}, has a ${this.installed_ram} installed RAM and it is good for Programming.`);
                };
                this.otherPCSpec = function() {
                    console.log(`The other specification's are PRIVATE!!.`);
                };
            }

            let myPC = new PC('David Mesoma', 'DESKTOP-426U9PI', 'Intel(X) Pentium(X) Dual  CPU  XXXXX  @ 2.16GHz   2.17GHz', '8.00 GB', 'AXAXAXAX-0000-AXAX-0000-AXAXAXAXAXAX', 'XAXAX-00000-00000-XAXAX', '64-bit operating system, x64-based processor');
            myPC.logPCSpec();
            myPC.otherPCSpec();
        </script>
    </li>
</ul>

## <p> Note: </p>

#### You can still access the code on this repo 🙂. Don't forget to star it and also contribute.⚡
