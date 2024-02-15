// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {

    // const chatProps = useMultiChatLogic(
    //     'a77aaeda-5b8d-4ee5-853b-1b0321c648fe',
    //     props.user.username,
    //     props.user.secret
    // );

  return (
    //   <div style={{ height: '100vh'}}>
    //     <MultiChatSocket {...chatProps} />
    //     <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    //   </div>
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='a77aaeda-5b8d-4ee5-853b-1b0321c648fe'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;