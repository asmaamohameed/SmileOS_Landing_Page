export const videos = [
  { key: "appointments", driveId: "1uXLxNf2QrnSuyIEq1tRnUMxHa5GFFcJo", group: "journey" },
  { key: "arrival", driveId: "1pCXMWCy65kmALpR2KVYvBwaxBlqObpOE", group: "journey" },
  { key: "patients", driveId: "1_e8UKX1ycxwNi6PXU88aUs1eS27SaaVR", group: "journey" },
  { key: "treatment-plan", driveId: "1PUfVpRNoE5MU_4GDCkNb_eDEduXuyuYT", group: "journey" },
  { key: "prescriptions", driveId: "1t-kYyE7EeSnHhX8KhTjZL7unwoP6RmCU", group: "journey" },
  { key: "lab", driveId: "1W8G0ERY61u6mCtZfBzqTQA1S4iMeSKJ8", group: "journey" },
  { key: "dashboard", driveId: "1srHScGGRpAETe40vRthIBNprpaB63h6c", group: "management" },
  { key: "services", driveId: "1nQ3_2veqtTh7bdUpNgMzH68xyZrcDPL5", group: "management" },
  { key: "staff", driveId: "12Sw65wUur6I_F3Jts_JV_OtYYPP2JaFK", group: "management" },
  { key: "inventory", driveId: "1nOgZ4SvRRylhJZJ7YtH2cFwugidtSonC", group: "management" },
  { key: "expenses", driveId: "1DE3oNqahQB8VhqKQg0uepWUpT1tekSHG", group: "management" },
] as const;

export type Video = (typeof videos)[number];
export type VideoKey = Video["key"];
export type VideoGroup = Video["group"];

export function videoEmbed(video: { driveId: string; youtubeId?: string }) {
  if (video.youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`;
  }
  return `https://drive.google.com/file/d/${video.driveId}/preview`;
}
