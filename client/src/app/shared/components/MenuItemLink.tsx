import { Container } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <Container
      component={NavLink}
      to={to}
      sx={{
        fontSize: "1.2rem",
        color: "inherit",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: "bold",
        "&.active": { color: "yellow" },
      }}
    >
      {children}
    </Container>
  );
}
