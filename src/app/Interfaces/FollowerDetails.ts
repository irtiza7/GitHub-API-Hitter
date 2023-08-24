import { Repo } from './Repo';

export interface FollowerDetails {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  repos: Repo[];
}
