import axios from 'axios';
import { GithubContributor } from '@/types/github';

const WEBSITE_REPO = 'djangocameroon/website-v2';

class GithubApiService {
  // Calls the public GitHub REST API directly — no auth needed for a public repo's contributor list.
  async getWebsiteContributors(): Promise<GithubContributor[]> {
    const { data } = await axios.get<GithubContributor[]>(
      `https://api.github.com/repos/${WEBSITE_REPO}/contributors`,
      { params: { per_page: 100 } }
    );
    return data.filter((contributor) => contributor.type === 'User');
  }
}

export const githubApi = new GithubApiService();
