import { Button, Dialog } from "@cloudflare/kumo";
import { XIcon, TrashSimpleIcon } from "@phosphor-icons/react";

export function DeleteLinkButton() {
  return (
    <Dialog.Root>
      <Dialog className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <Dialog.Title className="text-2xl font-semibold">
            Delete link?
          </Dialog.Title>
          <Dialog.Close
            aria-label="Close"
            render={(props) => (
              <Button
                {...props}
                variant="secondary"
                shape="square"
                icon={<XIcon />}
              />
            )}
          />
        </div>
        <Dialog.Description className="text-kumo-subtle">
          This will permanently delete the short link including all analytics.
        </Dialog.Description>
        <div className="mt-8 flex justify-end gap-2">
          <Dialog.Close
            render={(props) => (
              <Button variant="secondary" {...props}>
                Cancel
              </Button>
            )}
          />
          <Dialog.Close
            render={(props) => (
              <Button variant="destructive" {...props} icon={<TrashSimpleIcon />}>
                Delete
              </Button>
            )}
          />
        </div>
      </Dialog>
    </Dialog.Root>
  );
}
