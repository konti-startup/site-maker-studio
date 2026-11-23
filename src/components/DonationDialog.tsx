import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PIX_EMAIL_KEY } from "@/lib/donation";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Adiciona um timestamp para forçar recarregamento do QR Code
const getQrSrc = () => {
  const timestamp = Date.now();
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(PIX_EMAIL_KEY)}&t=${timestamp}`;
};

type DonationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DonationDialog = ({ open, onOpenChange }: DonationDialogProps) => {
  const [copied, setCopied] = useState(false);
  const [qrSrc, setQrSrc] = useState(getQrSrc());

  // Atualiza o QR Code sempre que o diálogo abrir
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      setQrSrc(getQrSrc());
    }
    onOpenChange(newOpen);
  };

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_EMAIL_KEY);
      setCopied(true);
      toast.success("Chave PIX copiada.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar. Copie manualmente.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Faça sua Doação</DialogTitle>
          <DialogDescription>
            Escaneie o QR Code ou copie a chave PIX abaixo
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-2">
          <div className="rounded-xl border bg-white p-3 shadow-inner">
            <img
              src={qrSrc}
              alt="QR Code da chave PIX"
              width={220}
              height={220}
              className="block"
              loading="lazy"
            />
          </div>

          <div className="w-full space-y-2">
            <p className="text-xs font-medium text-muted-foreground text-center">Chave PIX (E-mail)</p>
            <div className="flex items-center gap-2 rounded-xl border bg-muted/50 p-3">
              <code className="flex-1 break-all text-sm font-mono text-foreground">{PIX_EMAIL_KEY}</code>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="shrink-0 rounded-full"
                onClick={copyPix}
                aria-label="Copiar chave PIX"
              >
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground leading-relaxed">
            Sua doação ajuda a promover o desenvolvimento sustentável da Comunidade São Francisco do Caramuri.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;