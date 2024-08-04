<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()"> <slot name="label" /> </button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <slot />
	<form method="dialog" class="modal-backdrop flex flex-col">
		<button class="btn btn-primary w-16 self-end">Continue</button>
	  </form>
  </div>
</dialog>