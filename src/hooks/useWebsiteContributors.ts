"use client";

import { useQuery } from '@tanstack/react-query';
import { githubApi } from '@/lib/githubApi';
import { queryKeys } from '@/lib/query-keys';

export const useWebsiteContributors = () => {
  const { data, isPending, error } = useQuery({
    queryKey: queryKeys.websiteContributors(),
    queryFn: () => githubApi.getWebsiteContributors(),
    retry: 1,
    staleTime: 60 * 60 * 1000,
  });

  return {
    contributors: data ?? [],
    loading: isPending,
    error: error ? (error as Error).message || 'Failed to fetch contributors' : null,
  };
};
