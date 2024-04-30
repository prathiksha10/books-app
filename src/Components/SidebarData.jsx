import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
   {
     title : "User",
     icon: <FontAwesomeIcon icon={faUser} />,
     link: "/User"
},
{
    title : "Categories",
    icon: <FontAwesomeIcon icon={faFolderOpen} />,
    link: "/Categories"
},
{
    title : "Favorites",
    icon: <FontAwesomeIcon icon={faHeart} />,
    link: "/Favorites"
},
]