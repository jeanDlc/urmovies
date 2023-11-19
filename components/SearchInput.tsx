"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

import type { FormEvent } from "react";

const SearchInput = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    setSearchQuery("");

    router.push(`/search/${encodeURIComponent(query)}`);
  };
  return (
    <Box component="form" onSubmit={search}>
      <TextField
        fullWidth={true}
        type="text"
        label="Movies"
        variant="filled"
        size="medium"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
