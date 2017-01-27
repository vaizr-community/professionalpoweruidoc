# Welcome to Vaizr Professional Power UI

## Overview
Vaizr Professional Power UI is a fast, simple and open low-code platform that's geared towards building enterprise-ready applications fast.

### Host anywhere
Vaizr builds completely independent war's, which run on any Sevlet Engine.  However Vaizrdemo download comes prepackaged with Tomcat, Apache, PostgreSQL and NetBeans which is installed on Ubuntu 14.04 LTS.

The demo development environment runs completely on the ubuntu box. The GUI of NetBeans and the different browsers like google-chrome and firefox are displayed to you via **X-Windows**. The X-Windows software on your machine is called the **host** or **server**. The X-Windows part on the remote machine, the vaizrdemobox either on VirtualBox or on AWS are called the **guest** or **client**.

This client–server terminology – the user's terminal being the server and the applications being the clients – often confuses new **X** users, because the terms appear reversed. But X takes the perspective of the application, rather than that of the end-user: X provides display and I/O services to applications, so it is a server; applications use these services, thus they are clients. More information on <a href="https://en.wikipedia.org/wiki/X_Window_System" target="_blank">X-Windows</a> you can find <a href="https://en.wikipedia.org/wiki/X_Window_System" target="_blank">here</a> 

The quickest way to get started is by downloading the Vaizr development virtual machine.

However building the Vaizr development virtual machine is also easy. Building the machine yourself will only take one more step and an additional 15 minutes and after that you know for sure that are no hidden quirks and you can do it yourself on any environment you like. Scripts are available to deploy and run on Amazon automatically. In this documentation we will show  how to do that on VirtualBox and on AWS.

## Getting started

### Download the different components
There are several ways to get started but the quickest way of getting started is to by downloading the <a href="./../downloads/leavemail" target="_blank">Vaizr development virtual machine</a>.  

Before you can run the virtual machine on your host you have to install
<a href="https://www.virtualbox.org/" target="_blank">Virtual Box</a>.  
To run the prepackaged development tools on the virtual machine you also have to install an **X-windows** server. We also provide some handy host scripts which you can download in a separate zip file.  

So in short you have to execute the following four steps:  

1. Download and Install <a href="https://www.virtualbox.org/" target="_blank">Virtual Box</a>.  
2. Download and Install <a href="./../downloads/leavemail" target="_blank">Vaizr development virtual machine</a>.  
3. Download and Unzip [Vaizr development host scripts](./../downloads/vaizrdemohostscripts.zip).  
4. Download and Install an X-Windows server.  
    
    * For Mac use <a href='https://www.xquartz.org/' target='_blank'>XQuartz</a>.
    * Linux provided with a GUI comes with a X-Windows server out of the box.  
    * For Windows use <a href="http://mobaxterm.mobatek.net/" target="_blank"> MobaXterm</a>.  

You can directly logon to the machine or use SSH to log on. We will first start with X-Windows interface to explore the demo machine. We will also install NetBeans to develop a Master Detail screen in the next Chapter.

### Run Vaizr Development machine
1. Start Virtual box, you actually start your virtual machine host.
2. Press Command-I(Mac), CTRL-I(Windows), in menu (File==>Import Appliance...)
3. Select the virtual image from Vaizr (vaizrdemobox.ova)
4. Click Continue
5. Click Import; after a little time your image should be imported
6. Now select your virtual machine (vaizrdemobox)
7. Give it a little time to start the Ubuntu distribution with the Vaizr installation running

Double-clicking on the `vaizrdemobox.ova` gives the same result as the above seven steps.

### Check Vaizr Development machine
First of all you can login on the console which is started with Virtualbox
> username : `vagrant`  
> password : `vagrant`

The next part is different for Windows, we start with Mac and linux, of course when you run bash on windows you an also execute the scripts which are described in the next session.

## Mac and linux
First you can setup a ssh session  
> $`ssh vagrant@localhost -p 2222`  
> password : `vagrant`

If you see something like this below it's ok

        Warning: Permanently added '[127.0.0.1]:2222' (ECDSA) to the list of known hosts.
        vagrant@127.0.0.1's password:
        Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-83-generic x86_64)

         * Documentation:  https://help.ubuntu.com/

          System information as of Tue Jan 17 08:57:54 UTC 2017

          System load:  0.37              Processes:           96
          Usage of /:   8.5% of 39.34GB   Users logged in:     0
          Memory usage: 3%                IP address for eth0: 10.0.2.15
          Swap usage:   0%

          Graph this data and manage this system at:
            https://landscape.canonical.com/

          Get cloud support with Ubuntu Advantage Cloud Guest:
            http://www.ubuntu.com/business/services/cloud

        New release '16.04.1 LTS' available.
        Run 'do-release-upgrade' to upgrade to it.



        vagrant@vagrant-ubuntu-trusty-64:~$

Second you can see if X-windows is working properly.  

This is a bit more cumbersome so for this reason some scripts are prepared which you downloaded before as **vaizrdemohostscripts.zip**.  

Unzip the vaizrdemohostscripts.zip and go with the command prompt in the **cli** subfolder. `cli` stands for command line interface. Here are some scripts which you can run to start programs on the virtual box.

1. unzip `vaizrdemohostscripts.zip`
2. $`cd cli`
3. $`. ./firefox`

            $ . ./firefox

            VAIZRDEMO_GUEST_ENV is unset

            Are you sure you run your script with a dot ?
            ie . ./firefox instead of ./firefox

            otherwise

            Please run the following satement first
            . ./guest_set_execute_env.sh

4. $`. ./guest_set_execute_env.sh`
5. choose [1]
6. $`. ./firefox`

        The above mentioned scripsts are straightforward. Check it out. 
        The trick is that we use a private key (a .pem file) 
        to logon without a password

If all goes well you should see the **Ubuntu Start Page Mozilla Firefox**

We will do the same for Google-Chrome. Google-Chrome has to be started once to activate the browser for NetBeans. You activate chrome by accepting the presented two options.

1. $`. ./google-chrome`
2. choose `OK`

## Windows
On windows you need to install an **X-server** and you get proper **ssh** support with it. **Mobatek** has a nice free edition which works well.

### Installing MobaXterm
- go to [http://mobaxterm.mobatek.net](http://mobaxterm.mobatek.net) you will see the following screen.  

    ![mobaxterm_website](./../images/mobaxterm_website.png)  

- After clicking `GET MOBAXTERM NOW!` you see the follwing screen.  

    ![mobaxterm_download](./../images/mobaxterm_download.png)


- Choose the `Home Edition, Download now`  

    ![mobaxterm_installer](./../images/mobaxterm_installer.png)

- Choose the `Installer edition`  

    ![mobaxterm_download_installer](./../images/mobaxterm_download_installer.png)

- Choose `Save file`  

    ![mobaxterm_run_installer](./../images/mobaxterm_run_installer.png)

- Choose `Run`  

    ![mobaxterm_installer_wizard](./../images/mobaxterm_installer_wizard.png)  

- Choose `Next`  

    ![mobaxterm_accept_licence](./../images/mobaxterm_accept_licence.png)  

- Choose `I accept the terms in the Licence Agreement`  

    ![mobaxterm_allow_install](./../images/mobaxterm_allow_install.png)  

- Allow the program to run by clicking `Yes`  

    ![mobaxterm_install_completed](./../images/mobaxterm_install_completed.png)    

- Click `Finish`  
- Now the program is installed and you can start it by clicking the Icon on your desktop. 

    ![mobaxterm_icon_on_desktop](./../images/mobaxterm_icon_on_desktop.png)  

- You see the following screen now.  

    ![mobaxterm_startscreen](./../images/mobaxterm_startscreen.png)  

- After clicking on `Start a new remote session` you get the follwing screen.  

    ![mobaxterm_session_screen](./../images/mobaxterm_session_screen.png)  

- Here you can also choose to `Use private key`

- Unzip the **vaizrdemohostscripts.zip** file and the private keys can be found in the `..\cli\pem` folder. Choose for the **l**ocal**v**irtual**m**achine the `lvmvaizrdemobox.pem` file.  

- Create for example a directory C:\tools and unzip **vaizrdemohostscripts.zip** file in here.

- Go back to the MobaXterm screen and fill in the following values:

       - Remote host `localhost`
       - `v` Specify username `vagrant`
       - Port `2222`
       - `v` Use private key `C:\tools\vaizrdemohostscripts\cli\pem\lvmvaizrdemobox.pem`  

- Click the OK button as you can see at the above screenshot

- If you see something like this below it's ok  


          Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-83-generic x86_64)

           * Documentation:  https://help.ubuntu.com/

            System information as of Tue Jan 17 08:57:54 UTC 2017

            System load:  0.37              Processes:           96
            Usage of /:   8.5% of 39.34GB   Users logged in:     0
            Memory usage: 3%                IP address for eth0: 10.0.2.15
            Swap usage:   0%

            Graph this data and manage this system at:
               https://landscape.canonical.com/

            Get cloud support with Ubuntu Advantage Cloud Guest:
              http://www.ubuntu.com/business/services/cloud

          New release '16.04.1 LTS' available.
          Run 'do-release-upgrade' to upgrade to it.



          vagrant@vagrant-ubuntu-trusty-64:~$

- Second you can see if X-windows is working properly.
- Type after the `$` command prompt `firefox` and hit return
- $`firefox`


    If all goes well you should see the following
    ![mobaxterm_firefox](./../images/mobaxterm_firefox.png)

- We will do the same for Google-Chrome. Google-Chrome has to be started once to activate the browser for NetBeans. You activate chrome by accepting the following two options.  
    ![chrome_initiate](./../images/chrome_initiate.png)

1. $`google-chrome`
2. choose `OK`

## Install NetBeans
NetBeans is already prepackaged on the vaizrdemo box. However the installation requires some manual steps. Of course you are free to use whichever IDE you prefer like Eclipse or IntelliJ. The main reasons we choose to prepackage with NetBeans are twofold

1. Eclipse does not out of the box support maven
2. IntelliJ Community Edition comes without a integrated application server

NetBeans comes out of the box with prepacked support for tomcat. However some manual steps are required before we can start to work with NetBeans.  

One last remark about X-Windows Server and Windows and Mac. On Mac we can execute the scripts directly from the host. However to run convienant the commands we have to set the guest with the `. ./guest_set_execute_env.sh` before and execute the commands with `. ./` in front of the actual command. On Windows it is more convienant to start the SSH session from within MobaXterm. After logging on to the Ubuntu box we can simply execute the command. Since on the Vaizr Demo Ubuntu box the scripts are packaged in the ~/bin directory which has been added to the Path. In this chapter I will repeat the commands twice but after this chapter I will normally only show the host version.

>  * host ==> **Mac**, run command in **terminal**
>   * guest ==> **Windows**, run command in **MobaXerm terminal**  

* host  $`. ./install_netbeans`
* guest $`install_netbeans`

> You should see the following screen now
> ![install_netbeans](./../images/install_netbeans.png)

> Deselect GlassFish and select Apache Tomcat

* [`  `] GlassFish Server Open Source Edition 4.1.1
* [`v`] Apache Tomcat 8.0.27
<br>
<br>

* Click `Next >`

> Accept the license agreement

*  [`v`] I accept the terms in license agreement
<br>
<br>

* Click `Next >`

> Set the explicit path for the JDK `/usr/lib/jvm/java-8-oracle` See screenshot below

> ![install_netbeans_set_jdk](./../images/install_netbeans_set_jdk.png)

* Click `Next >`

> Keep the default for the apache tomcat installation

* Click `Next >`

* You should now see the following summary

> ![install_netbeans_summary](./../images/install_netbeans_summary.png)

* Click `Next >`

* Finally click `Finish`

## Run NetBeans

* host  $`. ./netbeans`
* guest $`netbeans`

You should see the following screen
> ![netbeans_startsceern](./../images/netbeans_startscreen.png)

* Deselect **Show On Startup** [` `]

* Close **Start Page**

* Now open the project **vaizrdemo** which is located in workspaces. `Open Project`

* Double-click on **workspaces**

> ![netbeans_open_project](./../images/netbeans_open_project.png)

* Select **vaizrdemo**

* Double-click on **vaizrdemo**

* After opening the project you are asked to enter a master password. Just click `Cancel`
> ![netbeans_enter_masterpassword](./../images/netbeans_enter_masterpassword.png)

* Now you get after a while the following screen. Please wait till all the indexes by NetBeans are build. You can see when NetBeans is still busy by looking at the footer of the page

> ![netbeans_vaizrdemo_application_workspace](./../images/netbeans_vaizrdemo_application_workspace.png)

* Now click the **green traingle** in the ribbon. The **Play** button. When hoovering the Play button it should show the text `Run Project(vaizrdemo_application)`. See also above screenshot.

* After clicking the Play button the google-chrome browser will be started. And you will get the following screen
> ![chrome_no_webpage_found](./../images/chrome_no_webpage_found.png)

> One more step and you are up and running. We have to set a specific configuration file in the NetBeans tomcat environment. This step can only be executed after tomcat has been initialized, which has been done by the previous step.

* Close the google-chrome browser

> Now you see the NetBeans IDE screen again  

> The configuration file we will set with prepackeged shell script. The easiest way to execute this script is by starting a terminal session from within the NetBeans IDE. The terminal can be found under __W__indow ==> IDE __T__ools ==> T__e__rminal
> ![netbeans_start_terminal](./../images/netbeans_start_terminal.png)

Within the terminal you can run the following script

$`install_vaizrdemo-1.0-SNAPSHOT_xml.sh`

Please be aware that autocomplete works so after typing `install_v` you can just hit `tab` and the line will be completed to `install_vaizrdemo-1.0-SNAPSHOT_xml.sh`

Hit `Return` and after that restart the server by clicking the Play button

Now you get the following screen in google-chrome
![chrome_vaizrdemo_logon](./../images/chrome_vaizrdemo_logon.png)

Login with

> username : `nanne`  
> password : `nanneo`

Now you will see the menu screen of the Vaizr Professional Power UI and this is the end of this chapter.
![chrome_vaizrdemo_opening_screen](./../images/chrome_vaizrdemo_opening_screen.png)

If you want to continue. Click Next at the bottom of this page.
