# Netlify Registration and Deployment Tutorial

---

## Introduction

This tutorial guides you through the process on registering on Netlify an the steps fo feploying a project. Netlify is a platform that simplifies hosting and automation fo web-based sites and applications.

---

## Table of Conntent
- Introduction
- Table of content
- Netlify Registration
- Creating a New Project
- Deploying Your Project
- Conclusion

---

## Netlify Registration

Follow these steps to register on Netlify:

1. Visit the Netlify website (https://www.netlify.com)
![Netlify-website](/Week-3-4/assets/images/web-netlify.png)

2. Click the **Sign up** button in the top right corner.
![SignUp-Button](/Week-3-4/assets/images/SignUp-Button.png)

3. You can register using your e-mail or through a GitHub, GitLab, Bitbucket account, or Sign Up with e-mail.

![Register-Options](/Week-3-4/assets/images/Register-options.png)
4. Follow the provided registration process, including e-mail verivication if required.

---

## Creating a New Project

To create a new project on Netlify, follow these steps:

1. After logging in, on Netlify dashboard, click **Site** and choose **Import from Git**.
![select-site](/Week-3-4/assets/images/Select-site.png)
![Import-from-git](/Week-3-4/assets/images/Select-import-from-git.png)

2. Choose the Git provider where your repository is located (Github, GitLab, Bitbucket).
![Select-Provider](/Week-3-4/assets/images/select-provider.png)

3. Select the repository you want to deploy.
![Select-Repository](/Week-3-4/assets/images/Select-repository.png)

4. Configure your build settings as needed for your project (for example, Base directory and publish directory).
![Configure-Build](/Week-3-4/assets/images/Configure-Build.png)

5. Click **Deploy**
![Click-Deploy](/Week-3-4/assets/images/Click-Deploy.png)

---

## Deploying Your Project

Once of your project is set up, each time you push change to your repository, Netlify will automatically deploy the latest version of your site. You can also manually trigger a deploy from the dashboard if needed.

---

## Connecting Netlify with Cloudflare

1. Go to [Cloudflare](https://www.cloudflare.com/) and log in to your account.
![login-cloudflare](/Week-3-4/assets/images/Login-Cloudflare.png)

2. In Cloudflare, add the domain you want to connect to your Netlify site.
![add-domain](/Week-3-4/assets/images/add-domain.png)

3. Select your plan
![select-plan](/Week-3-4/assets/images/select-plan.png)

4. Continue follow the instructions
![Add-DNS-Record](/Week-3-4/assets/images/DNS-Record.png)
![Update-Name-Server](/Week-3-4/assets/images/Change-Name-server.png)

5. Update Nameserver from Cloudflare at Niagahoster
![update-name-server](/Week-3-4/assets/images/Update-Name-Server-Niagahoster.png)

6. Wait until Nameserver updated
![wait-pending](/Week-3-4/assets/images/Wait-Update-Server.png)

---

## Colclusion

Using Netlify, the process of the hosting and deploying websites becomes more straightforward and efficient. The platform is very useful for the webdevelopers to speed up deployment processes and integration with various VCS (Version Control System) Services.

Congratulations! You have successfully registered on Netlify, deployed a site, and connected your domain with Cloudflare. Your website should now be accessible via your custom domain, with the added performance and security benefits of Cloudflare.

---

This tutorial was compiled by [Gusti Treshana Herman]. For more information and detailed guides, visit the Netlify Websites (https://www.netlify.com).

