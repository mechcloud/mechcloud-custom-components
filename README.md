# mechcloud-custom-components
Custom UI components to be consumed by Piston

While Piston offers a built-in frame and layout, that are used by the default site available at `piston-preview.mechclout.io`, you should NOT use these while creating your sites. This repository contains some sample frames/layouts which have been deployed as a cloudflare pages application available at `https://custom-components.mechcloud.io`. To consume these frames/layouts in your site all you need to do is register below frames/layouts under `Adminstration -> Frames/Layouts` sections and specify `https://custom-components.mechcloud.io` against the `Custom Components Host` field while creating a site.

## Frames
While registering a frame under `Administration -> Frames`, specify the name of one of the following frames in the `Component` field. It will then be visible under the `Frame` field while creating a site. 

### RktFrame1
This frame is meant for a site where you want to display only root-level pages in the top navigation.

Demo - Coming soon ..

### RktFrame2
This frame is meant for a site where you want to display multi-level page hierarchy in the top navigation. 

Demo - Coming soon ..

## Layouts
While registering a layout under `Administration -> Layouts`, specify the name of one of the following layouts in the `Component` field. It will then be visible under the `Layout` field while creating a site node of type 'Label' under `Administration -> Site Nodes`.

### RktLayoutTwoCols
This is a two-column layout. You can use it with `RktFrame2` for a site node of type `Label` having children pages for a site with a multi-level page hierarchy.

