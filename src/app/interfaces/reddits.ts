import { SubredditMetadataAttributes } from './reddits-metadata';

export interface SubredditAttributes {
  id?: string;
  name: string;
  title: string;
  display_name: string;
  description: string | null;
  description_html: string | null;
  public_description: string | null;
  subscribers: number;
  url: string;
  banner_img: string | null;
  key_color: string | null;
  primary_color: string | null;
  community_icon: string | null;
  mobile_banner_img: string | null;
  header_img: string | null;
  icon_img: string | null;
  active_user_count: number | null;
  submit_text: string | null;
  submit_text_html: string | null;
  created_utc?: string;
}

export interface JsonApiResource {
  type: string;
  id: string;
  attributes: SubredditAttributes;
  relationships: Relationship;
}
export interface Relationship {
  type: string;
  id: string;
  attributes: SubredditMetadataAttributes;
}

export interface JsonApiResponse {
  data: JsonApiResource[];
}

export interface SubRedditDetailIProps {
  data: JsonApiResource;
}
