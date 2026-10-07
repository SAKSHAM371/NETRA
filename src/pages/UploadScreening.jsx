import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  FileImage,
  ImagePlus,
  RefreshCw,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function UploadScreening() {
  const navigate = useNavigate();

  const [leftEye, setLeftEye] = useState(null);
  const [rightEye, setRightEye] = useState(null);
  const [dragging, setDragging] = useState(null);

  const handleFile = (file, eye) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid retinal image.");
      return;
    }

    const imageData = {
      file,
      preview: URL.createObjectURL(file),
    };

    if (eye === "left") {
      setLeftEye(imageData);
    } else {
      setRightEye(imageData);
    }
  };

  const handleInputChange = (event, eye) => {
    const file = event.target.files?.[0];

    if (file) {
      handleFile(file, eye);
    }

    event.target.value = "";
  };

  const handleDrop = (event, eye) => {
    event.preventDefault();
    setDragging(null);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      handleFile(file, eye);
    }
  };

  const removeImage = (eye) => {
    if (eye === "left") {
      if (leftEye?.preview) {
        URL.revokeObjectURL(leftEye.preview);
      }

      setLeftEye(null);
    } else {
      if (rightEye?.preview) {
        URL.revokeObjectURL(rightEye.preview);
      }

      setRightEye(null);
    }
  };

  const startAnalysis = () => {
    if (!leftEye || !rightEye) return;

    // Temporary navigation.
    // Later yahin actual AI/API analysis connect karenge.
    navigate("/screenings");
  };

  const UploadBox = ({ eye, title, description, image }) => {
    const isLeft = eye === "left";

    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

        {/* Box Header */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
              <Eye
                size={22}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {description}
              </p>
            </div>

          </div>

          {image && (
            <CheckCircle2
              size={21}
              className="text-emerald-400"
            />
          )}

        </div>

        {/* Image Uploaded */}
        {image ? (
          <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950">

            <img
              src={image.preview}
              alt={`${title} retinal scan`}
              className="h-64 w-full object-contain"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-slate-950/90 px-4 py-3">

              <div className="flex min-w-0 items-center gap-2">

                <FileImage
                  size={16}
                  className="shrink-0 text-cyan-400"
                />

                <span className="truncate text-xs text-slate-300">
                  {image.file.name}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <label className="cursor-pointer rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400">

                  Change

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) =>
                      handleInputChange(event, eye)
                    }
                  />

                </label>

                <button
                  onClick={() => removeImage(eye)}
                  className="rounded-lg border border-red-400/20 p-1.5 text-red-400 transition hover:bg-red-400/10"
                  title="Remove image"
                >
                  <X size={15} />
                </button>

              </div>

            </div>
          </div>
        ) : (
          /* Upload Area */
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(eye);
            }}
            onDragLeave={() => setDragging(null)}
            onDrop={(event) => handleDrop(event, eye)}
            className={`flex min-h-[260px] flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
              dragging === eye
                ? "border-cyan-400 bg-cyan-400/10"
                : "border-slate-700 bg-slate-950/50 hover:border-cyan-400/40 hover:bg-cyan-400/5"
            }`}
          >

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
              <ImagePlus
                size={26}
                className="text-cyan-400"
              />
            </div>

            <h4 className="mb-2 font-medium text-white">
              Upload {isLeft ? "Left" : "Right"} Eye Image
            </h4>

            <p className="mb-5 max-w-xs text-xs leading-5 text-slate-500">
              Drag & drop your retinal fundus image here
              or select an image from your device.
            </p>

            <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">

              <Upload size={17} />

              Choose Image

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) =>
                  handleInputChange(event, eye)
                }
              />

            </label>

            <p className="mt-4 text-[11px] text-slate-600">
              JPG, JPEG, PNG • Max 10MB
            </p>

          </div>
        )}

      </div>
    );
  };

  const bothImagesUploaded = leftEye && rightEye;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <main className="lg:ml-64">

        <div className="mx-auto max-w-7xl p-5 sm:p-7 lg:p-9">

          {/* Header */}
          <div className="mb-9">

            <button
              onClick={() => navigate("/user-dashboard")}
              className="mb-5 flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                <Sparkles
                  size={25}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  New Screening
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Upload retinal images from both eyes for AI-assisted screening.
                </p>
              </div>

            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">

            <div className="flex gap-3">

              <Sparkles
                size={20}
                className="mt-0.5 shrink-0 text-cyan-400"
              />

              <div>
                <p className="text-sm font-medium text-cyan-300">
                  Two-eye screening
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Upload clear retinal fundus images for both the
                  left and right eye. This helps the AI system perform
                  a more complete screening.
                </p>
              </div>

            </div>

          </div>

          {/* Upload Boxes */}
          <div className="grid gap-6 lg:grid-cols-2">

            <UploadBox
              eye="left"
              title="Left Eye"
              description="Left eye retinal fundus image"
              image={leftEye}
            />

            <UploadBox
              eye="right"
              title="Right Eye"
              description="Right eye retinal fundus image"
              image={rightEye}
            />

          </div>

          {/* Upload Status */}
          <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-medium text-white">
                  Screening Images
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {bothImagesUploaded
                    ? "Both eye images are ready for analysis."
                    : "Upload both eye images to continue."}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ${
                    leftEye
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      leftEye
                        ? "bg-emerald-400"
                        : "bg-slate-600"
                    }`}
                  />

                  Left Eye
                </div>

                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ${
                    rightEye
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      rightEye
                        ? "bg-emerald-400"
                        : "bg-slate-600"
                    }`}
                  />

                  Right Eye
                </div>

              </div>

            </div>

          </div>

          {/* Analyze Button */}
          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:flex-row">

            <div>
              <p className="font-medium text-white">
                Ready to analyze?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                AI analysis will evaluate both retinal images.
              </p>
            </div>

            <button
              disabled={!bothImagesUploaded}
              onClick={startAnalysis}
              className={`flex items-center justify-center gap-2 rounded-xl px-7 py-3 font-semibold transition ${
                bothImagesUploaded
                  ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                  : "cursor-not-allowed bg-slate-800 text-slate-600"
              }`}
            >
              <Sparkles size={18} />
              Start AI Analysis
            </button>

          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4">

            <p className="text-xs leading-5 text-slate-500">
              <span className="font-medium text-amber-400">
                Important:
              </span>{" "}
              This AI screening is designed as a clinical
              decision-support tool and should not replace
              professional medical diagnosis.
            </p>

          </div>

        </div>
      </main>
    </div>
  );
}

export default UploadScreening;