import NewsLetter from "@/components/ui/NewsLetter";
import LogoIcon from "@/public/svg/logo.svg";
import Image from "next/image";
import FaceBookIcon from "@/public/svg/facebook.svg";
import TwitterIcon from "@/public/svg/twitter.svg";
import InstagramIcon from "@/public/svg/instagram.svg"; 
import YoutubeIcon from "@/public/svg/youtube.svg";
import Link from "next/link";
import { url } from "inspector";
import { title } from "process";

const SocialMediaLInks = [
  { icon: FaceBookIcon, link: "https://www.facebook.com" },
  { icon: TwitterIcon, link: "https://www.twitter.com" },
  { icon: InstagramIcon, link: "https://www.instagram.com" },
  { icon: YoutubeIcon, link: "https://www.youtube.com" },
]

const FooterLinks = [
  {
    title: "Our Destinations",
    links: [
      {name: "Canada" , url: "#"},
      {name: "Alaska" , url: "#"},
      {name: "France" , url: "#"},
      {name: "Iceland" , url: "#"},
    ]
  },
  {
    title: "Our Activities",
    links: [
      {name: "North Lights" , url: "#"},
      {name: "Cruise and Sailing" , url: "#"},
      {name: "Wildlife" , url: "#"},
      {name : "Multi-activities" , url: "#"},
    ]
  },{
    title: "Travel Blogs",
    links: [
      {name: "Bali Travel Guide" , url: "#"},
      {name: "Sri Lanka Travel Guide" , url: "#"},
      {name: "Maldives Travel Guide" , url: "#"},
      {name : "Thailand Travel Guide" , url: "#"},
    ]
  },{
    title: "About Us",
    links: [
      {name: "Our Story" , url: "#"},
      {name: "Work With Us" , url: "#"},
    ]
  },
  {
    title: "Contact Us",
    links: [
      {name: "Help Center" , url: "#"},
      {name: "Support Community" , url: "#"},
    ]
  }
]

const Footer = () => {
  return (
    <section className="relative ">
          <NewsLetter  />
        <div className="bg-(--teal) flex ">
          <div className="flex flex-col py-6 px-10">
            <Image src={LogoIcon} alt="logo" loading="lazy" />
            <div className="flex justify-around">
              {SocialMediaLInks.map((social, index) => (
                <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <Image src={social.icon} alt="social-icon" loading="lazy" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-around flex-wrap w-full p-6">
            {FooterLinks.map((footerLink, index) => (
              <div key={index} >
                <h3 className="font-bold mb-4 text-base">{footerLink.title}</h3>  
                <ul className="flex flex-col gap-2">
                  {footerLink.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.url} className="text-sm">{link.name}</Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Footer