import { useCallback, useEffect, useState } from "react";

export const useFriends = (fetchFriends, friends) => {
  const [sortedFriends, setSortedFriends] = useState([]);
  const [activeSort, setActiveSort] = useState("");

  useEffect(() => {
    fetchFriends();
  }, []);

  let sorted = [...friends];

   const sortByName = useCallback(() => {
    sorted.sort((a, b) =>
      a.name.first.toLowerCase() + a.name.last.toLowerCase() >
      b.name.first.toLowerCase() + b.name.last.toLowerCase()
        ? 1
        : -1
    );
    setSortedFriends(sorted);
  }, [friends]);

  const sortByCity = useCallback(() => {
    sorted.sort((a, b) =>
      a.location.city.toLowerCase() > b.location.city.toLowerCase() ? 1 : -1
    );
    setSortedFriends(sorted);
  }, [friends]);

  const sortByCountry = useCallback(() => {
    let sorted = friends.sort((a, b) =>
      a.location.country.toLowerCase() > b.location.country.toLowerCase()
        ? 1
        : -1
    );
    setSortedFriends(sorted);
  }, [friends]);

  return { sortedFriends, sortByName, sortByCity, sortByCountry };
};
