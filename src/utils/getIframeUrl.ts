import jwt from "jsonwebtoken";

const METABASE_SITE_URL = "http://localhost:3000";
const METABASE_SECRET_KEY =
  "e2d883ead58c91573c8c99e608f513634ae587a807b735b106a076882dfa5151";

type Props = {
  questionNo: number;
  userId: string;
};

const getIframeURL = ({ questionNo, userId }: Props) => {
  const payload = {
    resource: { question: questionNo },
    params: {
      current_user_id: userId,
    },
    exp: Math.round(Date.now() / 1000) + 10 * 60,
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);
  console.log(token);

  const iframeURL =
    METABASE_SITE_URL +
    "/embed/question/" +
    token +
    "#bordered=true&titled=true";
  return iframeURL;
};

export default getIframeURL;
