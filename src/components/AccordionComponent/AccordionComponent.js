import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionComponent = () => {
  const [panel1Expanded, setPanel1Expanded] = React.useState(false);
  const [panel2Expanded, setPanel2Expanded] = React.useState(false);
  const [panel3Expanded, setPanel3Expanded] = React.useState(false);
  const [panel4Expanded, setPanel4Expanded] = React.useState(false);
  const [panel5Expanded, setPanel5Expanded] = React.useState(false);

  return (
    <Box className="pb-2">
      <Box>
        <Typography
          variant="h5"
          className="!font-semibold !text-lg py-3 px-4"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          Frequently Asked Question
        </Typography>
      </Box>
      <Box className="md:px-6 md:py-3 px-3 py-2">
        <Accordion
          expanded={panel1Expanded}
          onChange={() => setPanel1Expanded(!panel1Expanded)}
        >
          <AccordionSummary
            className="!p-0 !my-0"
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{ borderBottom: "1px solid #f0f0f0" }}
          >
            <Typography className="!text-sm !font-medium">
              What is KYC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!px-0">
            <Typography className="!text-sm !font-medium !leading-6">
              Know Your Customer (KYC) is a process whereby the project owner
              has shared their identification documents with PinkSale. KYC is
              used as a deterrent method to reduce illicit and deceptive
              behaviour.
              <br />
              <br />
              More information about KYC can be found on the Binance Academy
              website <br />
              via:
              <Link className="primaryText">
                &nbsp;https://academy.binance.com/en/glossary/know-your-customer{" "}
              </Link>
              <br />
              More information on PinkSale KYC process can be seen explained in{" "}
              <br />
              here:
              <Link className="primaryText">
                &nbsp;https://docs.pinksale.finance/important/pinksale-kyc
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={panel2Expanded}
          onChange={() => setPanel2Expanded(!panel2Expanded)}
        >
          <AccordionSummary
            className="!p-0 !my-0"
            aria-controls="panel2d-content"
            id="panel2d-header"
            style={{ borderBottom: "1px solid #f0f0f0" }}
          >
            <Typography className="!text-sm !font-medium">
              What is an Audit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!px-0">
            <Typography className="!text-sm !font-medium">
              The Audit badge details that the smart contract has been tested
              and analysed by a 3rd party service. <br />
              <br />
              Information about security audits can be seen via the Binance{" "}
              <br />
              Academy:
              <Link className="primaryText">
                &nbsp;https://academy.binance.com/en/glossary/security-audit
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={panel3Expanded}
          onChange={() => setPanel3Expanded(!panel3Expanded)}
        >
          <AccordionSummary
            className="!p-0 !my-0"
            aria-controls="panel3d-content"
            id="panel3d-header"
            style={{ borderBottom: "1px solid #f0f0f0" }}
          >
            <Typography className="!text-sm !font-medium">
              What is SAFU?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!px-0">
            <Typography className="!text-sm !font-medium">
              The SAFU badge demonstrates that the contract has been created by
              a PinkSale verified partner. SAFU benefits can be found via:
              <Link className="primaryText">
                &nbsp; https://docs.pinksale.finance/important/safu-contract
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={panel4Expanded}
          onChange={() => setPanel4Expanded(!panel4Expanded)}
        >
          <AccordionSummary
            className="!p-0 !my-0"
            aria-controls="panel4d-content"
            id="panel4d-header"
            style={{ borderBottom: "1px solid #f0f0f0" }}
          >
            <Typography className="!text-sm !font-medium">
              What is Doxx?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!px-0">
            <Typography className="!text-sm !font-medium">
              Projects certified with the Doxx badge highlights that the
              projects owner has completed a video AMA within their community,
              and that their submission to PinkSale matches their KYC
              information. <br />
              More information on PinkSale Doxx badge can be seen explained in{" "}
              <br />
              here:
              <Link className="primaryText">
                &nbsp; https://docs.pinksale.finance/important/pinksale-kyc
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={panel5Expanded}
          onChange={() => setPanel5Expanded(!panel5Expanded)}
        >
          <AccordionSummary
            className="!p-0 !my-0"
            aria-controls="panel5d-content"
            id="panel5d-header"
            style={{ borderBottom: "1px solid #f0f0f0" }}
          >
            <Typography className="!text-sm !font-medium">
              What is DYOR?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!px-0">
            <Typography className="!text-sm !font-medium">
              DYOR aims to reduce the number of uninformed investors in
              cryptocurrency. It encourages them to research and understand a
              cryptocurrency before investing so that they can answer precisely
              why they are buying that currency and supporting that project. The
              term is also often used as a disclaimer when cryptocurrency
              traders and enthusiasts make public posts or share their market
              analyses on social media platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default AccordionComponent;
