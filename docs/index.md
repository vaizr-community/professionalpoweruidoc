# Welcome to Vaizr Professional Power UI

## Overview
Vaizr Professional Power UI is a fast, simple and open low-code platform that's geared towards building enterprise ready applications fast. 

### Host anywhere
Vaizr builds completely independant war's which run on any Sevlet Engine.  However Vaizr comes also pre-packaged with Tomcat, Apache, PostgreSQL and Netbeans.
Scripts are available to deploy and run on Amazon automatically. The quickest way to get started is by downloading the Vaizr development virtual machine. The best way to get started is by building the Vaizr development virtual machine. Building the machine yourself will only take an additional 15 minutes and now you know for sure that are no hidden quirks and you can do it yourself on any environment you like. We will show here how to do that on VirtualBox and on AWS.

### Great tools available
There's a stack of good working tools available for Vaizr. Choose between: Vaizr Professional Power UI and Vaizr API Rest gateway, within those toolsets you have many productivity boosters which make your developer live easy, contraollable and fun.  
Preview your work as you go

## Download Vaizr development virtual machine
There are several ways to get started but the quickest way of getting started is to by downloading the [Vaizr development virtual machine](
https://mega.nz/#!npcnjKID!EpPaU5BV-tkfLXICCh9N37JWfu6HG-fBs43tX9zGQ5c
).
Before you can run the virtual machine on your host you have to install 
[Virtual Box](https://www.virtualbox.org/). If you want to run the prepackaged development tools on the virtual machine you also have to install an X-windows client.  
So in short you have to execute the following four steps  

1. DownLoad and Install [Virtual Box](https://www.virtualbox.org/).  
2. Download and Install [Vaizr development virtual machine](
https://mega.nz/#!npcnjKID!EpPaU5BV-tkfLXICCh9N37JWfu6HG-fBs43tX9zGQ5c
).
3. Download and unzip [Vaizr development host scripts](https://vaizrdemo:vaizr19651229@bitbucket.org/vaizr/vaizrdemodeployment/src/bc1719d104979705c6b7626394fcf48f84ad4135/install/vaizrdemohostscripts.zip)  
4. Download and Install an X-Windows client.  
     * Fow Mac use [XQuartz](https://www.xquartz.org/).  
     * For Windows use [MobaXterm](http://mobaxterm.mobatek.net/).  

You can directly logon to the machine or use SSH to log on. We will first start with the web interface to explore the demo application. We will also use Netbeans to develop a Master Detail screen in the next Chapter

## Getting started

### Run Vaizr Development machine
1. Start Virtual box, you actually start your virtual machine host.
2. Press Command-I(Mac), CTRL-I(Windows), in menu (File==>Import Appliance...)
3. Select the virtual image from Vaizr (vaizrdemobox.ova)
4. Click Continue
5. Click Import; after a little time your image should be imported
6. Now select your virtual machine (vaizrdemobox) 
7. Give it a little time to start the Ubuntu distribution with the Vaizr installation running

### Check Vaizr Development machine & X-Windows
First of all you can login on the console which is started with Virtualbox
username : vagrant
password : vagrant

Second you can setup an ssh session
ssh vagrant@localhost -p 2222
password : vagrant

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

Third you can see if X-windows is working properly
This is a bit more cumbersome so for this reason some scripts are prepared which you downloaded before as **vaizrdemohostscripts.zip**. Unzip the vaizrdemohostscripts.zip and go with the command prompt in the **cli** subfolder. `cli` stands for command line interface. Here are some scripts which you cab run to start programs on the virtual box. 

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

If all goes well you should see the following
![ubuntu_start_page_mozilla_firefox](./images/ubuntu_start_page_mozilla_firefox.png)

## Install NetBeans
NetBeans is already prepackaged on the vaizrdemo box. However the installation requires some manual steps. Of course you are free to use whichever IDE you prefer like Eclipse or IntelliJ. The main reasons we choose to prepackage with NetBeans are twofold

1. Eclipse does not out of the box support maven
2. IntelliJ Community Edition comes without a integrated application server

NetBeans comes out of the box with prepacked support for tomcat. However some manual steps are required before we can start to work with NetBeans

* $`. ./install_netbeans`

> You should see the following screen now
> ![install_netbeans](./images/install_netbeans.png) 

* Choose `[ ]Apache Tomcat 8.0.27`
 
> tick Apache , untick GlassFish

* Accept `[ ]I accept the terms in license agreement`

* Set the explicit path for the JDK `/usr/lib/jvm/java-8-oracle` See screenshot below

> ![install_netbeans_set_jdk](./images/install_netbeans_set_jdk.png)
 
* Keep the default for the apache tomcat installation, just click `Next` 
* You should now see the following summary

> ![install_netbeans_summary](./images/install_netbeans_summary.png)

* Finally click `Finish`

## Run NetBeans

* $`. ./netbeans`

You should see the following screen
> ![netbeans_startsceern](./images/netbeans_startscreen.png)

* Now open the project **vaizrdemo** which is located in workspaces. `Open Project`
 
> ![netbeans_open_project](./images/netbeans_open_project.png)

