import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../../scss/tabs.scss";
import PhotoList from "./PhotoList";
import MyPosts from "./MyPosts/MyPosts";

const ProfileTabs = (props) => (
    <Tabs>
        <TabList>
            <Tab>My Posts</Tab>
            <Tab>My Photo</Tab>
        </TabList>

        <TabPanel>
            <MyPosts />

        </TabPanel>
        <TabPanel>
            <PhotoList/>
        </TabPanel>
    </Tabs>
);
export default ProfileTabs;