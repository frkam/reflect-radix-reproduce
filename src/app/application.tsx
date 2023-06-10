import { reflect } from '@effector/reflect';
import { Button } from '../shared/ui/button';
import * as Dialog from '@radix-ui/react-dialog'

export function App() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <TriggerButton>Open</TriggerButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <Dialog.Close asChild>
          <Button>Close</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

const TriggerButton = reflect({
  view: Button,
  bind: {
    type: "button"
  }
})