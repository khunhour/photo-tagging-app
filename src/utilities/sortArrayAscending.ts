import { LeaderboardType } from "../type/LeaderboardType";

export const sortArrayAscending = (array: LeaderboardType) => {
	return array.sort((a, b) => a.time - b.time);
};
