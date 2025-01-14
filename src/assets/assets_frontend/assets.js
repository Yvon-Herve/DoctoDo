import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import pic_profil from "./pic_profil.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  pic_profil,
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "Médecin généraliste",
    image: General_physician,
  },
  {
    speciality: "Gynécologue",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologue",
    image: Dermatologist,
  },
  {
    speciality: "Pédiatres",
    image: Pediatricians,
  },
  {
    speciality: "Neurologue",
    image: Neurologist,
  },
  {
    speciality: "Gastro-entérologue",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr Karidja Sanghare",
    image: doc1,
    speciality: "Neurologue",
    degree: "MBBS",
    experience: "2 ans d'expérience",
    about:
      "Dr Sanghare s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 40,
    address: {
      line1: "9 rue de la Joie",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc2",
    name: "Dr Emily Larson",
    image: doc2,
    speciality: "Gynécologue",
    degree: "MBBS",
    experience: "3 ans d'expérience",
    about:
      "Dr Larson s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 60,
    address: {
      line1: "27 rue Croix Felix",
      line2: "93000 Paris",
    },
  },
  {
    _id: "doc3",
    name: "Dr Joseph Lomobushi",
    image: doc3,
    speciality: "Dermatologue",
    degree: "MBBS",
    experience: "1 an d'expérience",
    about:
      "Dr Lomobushi s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 30,
    address: {
      line1: "10 rue de la Chute",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc4",
    name: "Dr Richard Delafosse",
    image: doc4,
    speciality: "Médecin généraliste",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Le Dr Delafosse s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "17 rue de la Plate",
      line2: "95000 Paris",
    },
  },
  {
    _id: "doc5",
    name: "Dr Jennifer Garcia",
    image: doc5,
    speciality: "Neurologue",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr Garcia s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "16 avenue de la Rosette ",
      line2: "75002 Paris",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Rubben Fonseca",
    image: doc6,
    speciality: "Neurologue",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr Williams s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "5 avenue du Plessis",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher David",
    image: doc7,
    speciality: "Médecin généraliste",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr David s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "17 rue de la Ferme",
      line2: "77000 Paris",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothee Blanc",
    image: doc8,
    speciality: "Gynécologue",
    degree: "MBBS",
    experience: "3 ans d'expérience",
    about:
      "Dr Blanc s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 60,
    address: {
      line1: "27e avenue, Rio de Janeiro",
      line2: "91000 Paris",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Alexia Michel",
    image: doc9,
    speciality: "Dermatologue",
    degree: "MBBS",
    experience: "1 an d'expérience",
    about:
      "Dr Michel s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 30,
    address: {
      line1: "10 rue, Du Gneral Pelee",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey Carosin",
    image: doc10,
    speciality: "Pédiatre",
    degree: "MBBS",
    experience: "2 ans d'expérience",
    about:
      "Dr Carosin s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 40,
    address: {
      line1: "47e rue, Du Circle ",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Pédiatres",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr Kelly s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "7e avenue, Germaine Du lac",
      line2: "92000 Paris",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Yousseph Attal",
    image: doc12,
    speciality: "Pédiatres",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr Attal s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "57e rue, Bompastor",
      line2: "95000 Paris",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Martin",
    image: doc13,
    speciality: "Médecin généraliste",
    degree: "MBBS",
    experience: "4 ans d'expérience",
    about:
      "Dr Martin s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 50,
    address: {
      line1: "17e Croix, Richmond",
      line2: "75000 Paris",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Luc Martinez",
    image: doc14,
    speciality: "Médecin généraliste",
    degree: "MBBS",
    experience: "3 ans d'expérience",
    about:
      "Dr Martinez s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 60,
    address: {
      line1: "27e Croix, Richmond",
      line2: "77000 Paris",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Laubert",
    image: doc15,
    speciality: "Gastro-entérologue",
    degree: "MBBS",
    experience: "1 an d'expérience",
    about:
      "Dr Laubert s'engage pleinement à fournir des soins médicaux complets, en mettant l'accent sur la médecine préventive, le diagnostic précoce et des stratégies de traitement efficaces.",
    fees: 30,
    address: {
      line1: "10 Rue de la Paix",
      line2: "75002 Paris",
    },
  },
];
