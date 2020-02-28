import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../../scss/tabs.scss";
import PhotoList from "../PhotoList";

const ProfileTabs = (props) => (
    <Tabs>
        <TabList>
            <Tab>My Posts</Tab>
            <Tab>My Photo</Tab>
        </TabList>

        <TabPanel>
            <h2>Any content 1</h2>

        </TabPanel>
        <TabPanel>
            <PhotoList/>
        </TabPanel>
    </Tabs>
);
export default ProfileTabs;