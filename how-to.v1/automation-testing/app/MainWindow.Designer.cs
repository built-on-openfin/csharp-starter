
namespace OpenFin.Automation.Win.Sample
{
    partial class MainWindow
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainWindow));
            this.embeddedViewPanel = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.embeddedView = new Openfin.WinForm.EmbeddedView();
            this.embeddedViewPanel.SuspendLayout();
            this.SuspendLayout();
            // 
            // embeddedViewPanel
            // 
            this.embeddedViewPanel.Controls.Add(this.label1);
            this.embeddedViewPanel.Controls.Add(this.embeddedView);
            this.embeddedViewPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.embeddedViewPanel.Location = new System.Drawing.Point(0, 0);
            this.embeddedViewPanel.Margin = new System.Windows.Forms.Padding(0);
            this.embeddedViewPanel.Name = "embeddedViewPanel";
            this.embeddedViewPanel.Size = new System.Drawing.Size(1206, 1136);
            this.embeddedViewPanel.TabIndex = 5;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.SystemColors.Control;
            this.label1.Location = new System.Drawing.Point(17, 24);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(293, 30);
            this.label1.TabIndex = 1;
            this.label1.Text = "Loading content, please wait...";
            // 
            // embeddedView
            // 
            this.embeddedView.AutoScale = true;
            this.embeddedView.Dock = System.Windows.Forms.DockStyle.Fill;
            this.embeddedView.Location = new System.Drawing.Point(0, 0);
            this.embeddedView.Margin = new System.Windows.Forms.Padding(2);
            this.embeddedView.Name = "embeddedView";
            this.embeddedView.OpenfinWindow = null;
            this.embeddedView.Size = new System.Drawing.Size(1206, 1136);
            this.embeddedView.TabIndex = 0;
            this.embeddedView.TabStop = false;
            this.embeddedView.Text = "embeddedView3";
            this.embeddedView.Ready += new System.EventHandler(this.embeddedView_Ready);
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 30F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.ClientSize = new System.Drawing.Size(1206, 1136);
            this.Controls.Add(this.embeddedViewPanel);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.Name = "MainWindow";
            this.Text = "Automation Example Tool";
            this.embeddedViewPanel.ResumeLayout(false);
            this.embeddedViewPanel.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Panel embeddedViewPanel;
        private Openfin.WinForm.EmbeddedView embeddedView;
        private System.Windows.Forms.Label label1;
    }
}

