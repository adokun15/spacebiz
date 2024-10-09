import { ToggleRight } from "lucide-react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";

export default function SettingsComponent() {
  return (
    <>
      <Card>
        <h2 className="text-3xl fira-sans-medium">Settings</h2>
      </Card>
      <Card>
        <h2 className="text-xl fira-sans-medium">Store</h2>
        <div>
          <article className="flex my-4 spx-[1vw] pr-10 gap-4">
            <p className="text-[20px] fira-sans-regular">Live Publish</p>
            <button>
              <ToggleRight width={30} height={30} />
            </button>
          </article>

          <article className="px-1">
            <form className="md:grid my-2 *:block md:grid-cols-2 md:space-y-0 space-y-4 block gap-3">
              <label>
                <span>Category</span>
                <span className="text-xs text-gray-400 my-3 block">
                  Kitchen utensil
                </span>
                <Input placeholder="Clothes, Kitchen Utensil" />
              </label>
              <label>
                <span>Set Status</span>
                <span className="text-xs text-gray-400 my-3 block">
                  New Arrival
                </span>
                <Input placeholder="Delivery Day, Market Day, Order Now, New Arrival" />
              </label>
              <label>
                <span>Description</span>
                <span className="text-xs text-gray-400 my-3 block">
                  This is a demo Description.
                </span>
                <Input placeholder="This is demo description" />
              </label>
            </form>
            <Button clxName="bg-teal-700 text-white">Save</Button>
          </article>
        </div>
      </Card>
      <Card>
        <h2>Generate Store Link</h2>
        <div className="my-3 space-y-2">
          <Input placeholder="Unique name for your store e.g abike-diary" />
          {/*<span>Maximum length of 20 word</span>*/}
          <Button clxName="bg-teal-800 text-white">Generate</Button>
        </div>
      </Card>
      <Card className="space-y-5">
        <h2 className="text-3xl fira-sans-medium">Account Management</h2>
        <div className="text-xl">
          Deactivation your Account. Permanently remove your account from
          SpaceBiz.
        </div>
        <Button clxName="bg-red-700  text-white">Deactivate</Button>
      </Card>
    </>
  );
}
